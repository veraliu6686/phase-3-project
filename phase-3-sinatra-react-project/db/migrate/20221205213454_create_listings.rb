class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title
      t.float :price
      t.text :description
      t.string :category
      t.integer :user_id
    end
  end
end
