class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    size = params[:board_size]
    level = params[:game_difficulty]
    url = "http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=#{size}&level=#{level}"
    api_response = Faraday.get(url)
    api_game_data = JSON.parse(api_response.body)

    board = []
    row_counter = 0
    size.times do
      row = []
      column_counter = 0
      size.times do
        square = {
          "x"=>column_counter,
          "y"=>row_counter,
          "value"=>" ",
          "immutable"=>false
        }
        row << square
        column_counter += 1
      end
      board << row
      row_counter += 1
    end

    if api_game_data["response"]

      api_game_data["squares"].each do |square|
        square["value"] = square["value"].to_s
        square["immutable"] = true
        board[square["y"]][square["x"]] = square
      end

      render json: board
    else
      render json: { error: "API failed to create new game" }
    end
  end
end
