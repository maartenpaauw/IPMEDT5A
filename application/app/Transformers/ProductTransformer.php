<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Product;
use League\Fractal\TransformerAbstract;

class ProductTransformer extends TransformerAbstract
{
    public function transform(Product $product)
    {
        return $product->toArray();
    }
}