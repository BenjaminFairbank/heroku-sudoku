class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    size = params[:board_size]
    level = params[:game_difficulty]
    url = "http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=#{size}&level=#{level}"
    api_response = Faraday.get(url)
    api_game_data = JSON.parse(api_response.body)

    board = []
    size.times do
      row = []
      size.times do
        row << ' '
      end
      board << row
    end

    if api_game_data["response"]

      api_game_data["squares"].each do |square|
        board[square["y"]][square["x"]] = square["value"].to_s
      end

      render json: board
    else
      render json: { error: "API failed to create new game" }
    end
  end
end
