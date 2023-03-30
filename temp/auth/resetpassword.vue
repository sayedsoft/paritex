<route lang="yaml">
meta:
  requiresAuth: false
</route>
<script setup lang="ts">
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";
</script>

<template>
    <AuthLayout>
      <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div
                class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"
              >
                <h2
                  class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left"
                >
                  Sign In
                </h2>
                <div class="mt-2 text-center intro-x text-slate-400 xl:hidden">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                <div class="mt-8 intro-x">
                  <FormInput
                    type="text"
                    class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                    placeholder="Email"
                  />
                  <FormInput
                    type="password"
                    class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                    placeholder="Password"
                  />
                </div>
                <div
                  class="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm"
                >
                  <div class="flex items-center mr-auto">
                    <FormCheck.Input
                      id="remember-me"
                      type="checkbox"
                      class="mr-2 border"
                    />
                    <label class="cursor-pointer select-none" htmlFor="remember-me">
                      Remember me
                    </label>
                  </div>
                  <a href="">Forgot Password?</a>
                </div>
                <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                  <Button
                    variant="primary"
                    class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline-secondary"
                    class="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                  >
                    Register
                  </Button>
                </div>
                <div
                  class="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left"
                >
                  By signin up, you agree to our
                  <a class="text-primary dark:text-slate-200" href="">
                    Terms and Conditions
                  </a>
                  &
                  <a class="text-primary dark:text-slate-200" href="">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
        
    </AuthLayout>
</template>