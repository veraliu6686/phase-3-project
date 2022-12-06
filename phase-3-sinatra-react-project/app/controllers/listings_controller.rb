class ListingsController < ApplicationController
    set :default_content_type, 'application/json'

    get "/listings" do
      Listing.all.to_json
    end

    get "/listings/:id" do
      Listing.find(params[:id]).to_json
    end

    post "/listings" do
      Listing.create(params).to_json
    end

    patch "/listings/:id" do

      Listing.find(params[:id]).update(params)
      Listing.find(params[:id]).to_json
    end

    delete "/listings/:id" do
      Listing.find(params[:id]).destroy
    end

end
