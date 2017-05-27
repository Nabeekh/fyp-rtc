class CreatePackages < ActiveRecord::Migration[5.0]
  def change
    create_table :packages do |t|
      t.string :sender
      t.string :receiver
      t.text :detail
      t.integer :weight
      t.string :city
      t.string :address
      t.string :mobile
      t.integer :trackId
      t.string :region
      t.string :status
      t.integer :price
      t.timestamps
    end
  end
end
