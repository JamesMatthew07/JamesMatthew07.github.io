"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const MyForm = () => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mb-4">
          <h1 className="text-3xl font-bold text-center text-white">Give me a message</h1>
          <p className="text-sm text-center text-gray-400 mb-6">
          If you think you have the same vision as me, then I am encouraging you to build that future together. 
          </p>
    
          <form>
            <div className="space-y-4">
              {/* First Name Field */}
              <div>
                <Label htmlFor="firstName" className="text-white">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="mt-2 bg-gray-800 text-white placeholder-gray-500 rounded-md p-2"
                />
              </div>
    
              {/* Last Name Field */}
              <div>
                <Label htmlFor="lastName" className="text-white">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="mt-2 bg-gray-800 text-white placeholder-gray-500 rounded-md p-2"
                />
              </div>
    
              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="mt-2 bg-gray-800 text-white placeholder-gray-500 rounded-md p-2"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Input
                  id="message"
                  type="text"
                  placeholder="I want to hire you"
                  className="mt-2 bg-gray-800 text-white placeholder-gray-500 rounded-md p-2"
                />
              </div>
              {/* Sign Up Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Contact Me &rarr;
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    };

export default MyForm;
