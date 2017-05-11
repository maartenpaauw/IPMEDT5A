<?php

namespace IPMEDT5A\Http\Controllers;

use Illuminate\Http\Request;
use IPMEDT5A\Models\Shelf;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTFactory;

/**
 * Class AuthenticateController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Authorisation", uri="/authenticate")
 */
class AuthenticateController extends Controller
{
    /**
     * Authenticate a user.
     *
     * @Post("/authenticate")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request({"email": "YOUR_EMAIL", "password": "YOUR_PASSWORD"}),
     *      @Response(200, body = {"token":"YOUR_TOKEN"}),
     *      @Response(401, body = {"error":"invalid_credentials"}),
     *      @Response(500, body = {"error":"could_not_create_token"}),
     * })
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }

    /**
     * Authenticate a shelf.
     *
     * @Post("/authenticate/shelf")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request({"mac_address": "MAC_ADDRESS_SHELF", "private_key": "ENV_JWT_PRIVATE_KEY"}),
     *      @Response(200, body = {"token":"YOUR_TOKEN"}),
     *      @Response(401, body = {"error":"invalid_credentials"}),
     *      @Response(500, body = {"error":"could_not_create_token"}),
     * })
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateShelf(Request $request)
    {
        // Credentials
        $credentials = collect($request->only(['mac_address', 'private_key']));

        // Controleer of de private key klopt.
        if($credentials->get('private_key') == env('JWT_PRIVATE_KEY'))
        {
            // Haal de shelf op.
            $shelf = Shelf::where('mac_address', $credentials->get('mac_address'))->first();

            // Controleer of deze shelf bestaat.
            if(! is_null($shelf))
            {
                // Maak de payload aan.
                $payload = JWTFactory::sub($shelf->id)->make();

                // Maak een token van de payload.
                $token = JWTAuth::encode($payload)->get();

                // Geef de token terug.
                return response()->json(compact('token'));
            }

            // Shelf bestaat niet, token kan niet gemaakt worden.
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // Private key klopt niet, token kan niet gemaakt worden.
        return response()->json(['error' => 'invalid_credentials'], 401);
    }

    /**
     * Check the token.
     *
     * @Post("/authenticate/check/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"user":{"id":1,"name":"YOUR_NAME","email":"YOUR_EMAIL","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}),
     *      @Response(401, body = {"token_expired"}),
     *      @Response(400, body = {"token_invalid"}),
     *      @Response(500, body = {"token_absent"}),
     * })
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticateCheck()
    {
        try
        {
            if (!$user = JWTAuth::parseToken()->authenticate())
            {
                return response()->json(['user_not_found'], 404);
            }
        }

        catch (TokenExpiredException $e)
        {
            return response()->json(['token_expired'], $e->getStatusCode());
        }

        catch (TokenInvalidException $e)
        {
            return response()->json(['token_invalid'], $e->getStatusCode());
        }

        catch (JWTException $e)
        {
            return response()->json(['token_absent'], $e->getStatusCode());
        }

        return response()->json(compact('user'));
    }

    /**
     * Check the token.
     *
     * @Post("/authenticate/shelf/check/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"shelf":{"id":1,"demo_id":3,"mac_address":"60:DB:65:4D:08:CA","created_at":"2017-03-31 11:09:55","updated_at":"2017-03-31 11:09:55","demo":{"id":3,"product_id":293,"uuid":"8b6d3cbf-f1c2-37f7-ad6b-a3c461c1c90f","created_at":"2017-03-31 11:09:55","updated_at":"2017-03-31 11:09:55","product":{"id":293,"shoe_id":2,"size_id":2,"sku":"1975872688085","price":"504.65","created_at":"2017-03-31 11:09:55","updated_at":"2017-03-31 11:09:55","shoe":{"id":2,"name":"Aquamarine","brand":"Cruickshank-Thiel","created_at":"2017-03-31 11:09:55","updated_at":"2017-03-31 11:09:55"},"size":{"id":2,"eu_size":"30.5","created_at":"2017-03-31 11:09:54","updated_at":"2017-03-31 11:09:54"}}}}}),
     *      @Response(401, body = {"token_expired"}),
     *      @Response(400, body = {"token_invalid"}),
     *      @Response(500, body = {"token_absent"}),
     * })
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticateShelfCheck()
    {
        try
        {
            if (!$shelf = Shelf::find(JWTAuth::parseToken()->getPayload()->get('sub')))
            {
                return response()->json(['user_not_found'], 404);
            }
        }

        catch (TokenExpiredException $e)
        {
            return response()->json(['token_expired'], $e->getStatusCode());
        }

        catch (TokenInvalidException $e)
        {
            return response()->json(['token_invalid'], $e->getStatusCode());
        }

        catch (JWTException $e)
        {
            return response()->json(['token_absent'], $e->getStatusCode());
        }

        return response()->json(compact('shelf'));
    }
}
