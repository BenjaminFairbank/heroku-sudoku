class CreateSquares < ActiveRecord::Migration[5.2]
  def change
    create_table :squares do |t|
      t.belongs_to :row,  null: false

      t.integer :x,       null: false
      t.integer :y,       null: false
      t.string :value,    null: false
      t.boolean :given,   null: false
    end
  end
end
