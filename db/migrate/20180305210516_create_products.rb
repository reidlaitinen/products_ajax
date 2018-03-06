class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.float :base_price
      t.string :description
      t.string :quantity_on_hand
      t.string :color
      t.string :weight
      t.string :other_attributes

      t.timestamps
    end
  end
end
