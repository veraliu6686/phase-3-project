class ListingsController < ApplicationController
    set :default_content_type, 'application/json'

    get "/listings" do
      { message: "Good luck with your listings!" }.to_json
    end

end
