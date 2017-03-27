<?php

namespace IPMEDT5A\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try
        {
            if (! $token = JWTAuth::attempt($credentials))
            {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        }

        catch (JWTException $e)
        {
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
     *      @Request({"to": "do"}),
     *      @Response(200, body = {"token":"YOUR_TOKEN"}),
     *      @Response(401, body = {"error":"invalid_credentials"}),
     *      @Response(500, body = {"error":"could_not_create_token"}),
     * })
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateShelf(Request $request)
    {
        // TODO: even doen.
        return response()->json(["to" => "do #joe"]);
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
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }

        return response()->json(compact('user'));
    }
}
