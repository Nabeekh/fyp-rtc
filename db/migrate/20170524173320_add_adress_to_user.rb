class AddAdressToUser < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :addressLine, :string
  	add_column :users, :mobile, :string
  	add_column :users, :city, :string
  	add_column :users, :region, :string

  end
end
