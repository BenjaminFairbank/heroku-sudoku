class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    game = Game.find(params[:id])
    render json: game
  end

  def create
    size = game_params[:board_size]
    level = game_params[:game_difficulty]
    url = "http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=#{size}&level=#{level}"
    api_response = Faraday.get(url)
    api_game_data = JSON.parse(api_response.body)

    if api_game_data["response"]

      new_game = Game.create(game_params)
      row_counter = 0
      size.times do
        new_row = Row.create(game_id: new_game.id, index: row_counter)
        column_counter = 0
        size.times do
          notes = []
          size.times do
            notes << '.'
          end
          notes = notes.join('')
          new_square = Square.create(
            row_id: new_row.id,
            x: column_counter,
            y: row_counter,
            value: " ",
            given: false,
            notes: notes
          )
          column_counter += 1
        end
        row_counter += 1
      end

      api_game_data["squares"].each do |square|
        new_game.rows[square["y"]].squares[square["x"]].update(value: square["value"].to_s, given: true)
      end

      render json: new_game
    else
      render json: { error: "API failed to create new game" }
    end
  end

  protected

  def game_params
    params.require(:game).permit(:board_size, :game_difficulty)
  end
end
