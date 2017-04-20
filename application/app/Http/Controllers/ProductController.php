<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Product;
use Illuminate\Http\Request;
use IPMEDT5A\Models\Shoe;
use IPMEDT5A\Models\Size;
use IPMEDT5A\Transformers\ProductTransformer;
use Maatwebsite\Excel\Facades\Excel;

/**
 * Class ProductController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Products")
 */
class ProductController extends Controller
{
    /**
     * Display a listing of products.
     *
     * @Get("/api/products/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"shoe_id":1,"size_id":1,"sku":"8198284818519","price":"516.43","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","shoe":{"id":1,"name":"LimeGreen","brand":"Heathcote-Ondricka","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"size":{"id":1,"eu_size":"30.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return $this->response->collection($products, new ProductTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @Get("/api/products/{product}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("demo", description="The id of the product.", required=true, type="integer"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"shoe_id":1,"size_id":1,"sku":"8198284818519","price":"516.43","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","shoe":{"id":1,"name":"LimeGreen","brand":"Heathcote-Ondricka","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"size":{"id":1,"eu_size":"30.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return $this->response->item($product, new ProductTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }

    /**
     * @param Request $request
     * @return \Dingo\Api\Http\Response
     */
    public function uploadProducts(Request $request)
    {
        // Haad het bestand.
        Excel::load($request->file('file')->getRealPath(), function($reader) {

            // Ga door al je producten heen.
            foreach ( Product::all() as $product)
            {
                // Verwijder het product.
               $product->delete();
            }

            // Loop door alle producten heen.
            foreach ($reader->all() as $result)
            {
                // Verkrijg de schoen.
                $shoe = Shoe::firstOrCreate([
                    'name'  => $result->benaming,
                    'brand' => $result->merk,
                    'color' => $result->kleur,
                    'price' => $result->prijs
                ]);

                // De data.
                $data = [
                    'shoe_id' => $shoe->id,
                    'size_id' => Size::size($result->maat)->id
                ];

                // Maak het product.
                $product = Product::where($data)->withTrashed()->first() ?: new Product($data);

                // Controleer of er een getrashde product bestaat.
                if($product->trashed())
                {
                    // Restore het.
                    $product->restore();
                }

                // Sla het op.
                $product->save();
            }
        });

        // Geef alle producten terug.
        return $this->response->item(Product::all(), new ProductTransformer());
    }
}
