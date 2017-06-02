class CreateOutcomes < ActiveRecord::Migration[5.0]
  def change
    create_table :outcomes do |t|
    	t.text :description
    	t.string :received_by
    	t.string :receiver_cinc
    	t.boolean :status
      t.timestamps
    end
  end
end
