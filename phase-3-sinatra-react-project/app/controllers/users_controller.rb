class UsersController < ApplicationController
    set :default_content_type, 'application/json'

    get "/users" do
      { message: "Good luck with your users!" }.to_json
    end

end
