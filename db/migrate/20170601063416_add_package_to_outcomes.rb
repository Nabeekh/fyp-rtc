class AddPackageToOutcomes < ActiveRecord::Migration[5.0]
  def change
    add_reference :outcomes, :package, foreign_key: true
  end
end
