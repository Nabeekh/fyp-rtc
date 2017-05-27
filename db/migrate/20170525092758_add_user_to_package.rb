class AddUserToPackage < ActiveRecord::Migration[5.0]
  def change
    add_reference :packages, :user, foreign_key: true
  end
end
