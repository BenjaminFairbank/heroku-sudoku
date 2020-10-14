class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :board_size, null: false
      t.integer :game_difficulty, null: false

      t.timestamps null: false
    end
  end
end
