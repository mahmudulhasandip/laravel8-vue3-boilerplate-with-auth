<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    protected function register(Request $request)
    {
        $data = $request->all();

        $Validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if ($Validator->fails()) {
            return $this->errorResponse('Validation Error', $Validator->errors());
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        Auth::login($user);

        $response = [
            'token' => $user->createToken('auth-user')->plainTextToken,
            'name' => $user->name,
            'email' => $user->email
        ];

        return $this->successResponse($response, "User successfully register");
    }


    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $response = [
                'token' => $user->createToken('auth-user')->plainTextToken,
                'name' => $user->name,
                'email' => $user->email
            ];
            return $this->successResponse($response, "User successfully login");
        } else {
            return $this->errorResponse('Invalid Credentials');
        }
    }

    public function logout(Request $request)
    {
        // $request->user()->currentAccessToken()->delete();
        $request->user()->tokens()->delete();
        return $this->successResponse(null, "Logout successfully");
    }
}
