class CreateRows < ActiveRecord::Migration[5.2]
  def change
    create_table :rows do |t|
      t.belongs_to :game, null: false

      t.integer :index, numericality: { only_integer: true }
    end
  end
end
