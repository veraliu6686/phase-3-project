class AddingImageToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings,:img_url,:string
  end
end
