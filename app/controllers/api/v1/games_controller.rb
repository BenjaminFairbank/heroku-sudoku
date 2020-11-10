class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    game = Game.find(params[:id])
    render json: game
  end

  def create
    api_game_data = get_api_data(game_params)

    if api_game_data["response"]
      new_game = Game.create(game_params)
      new_game.build(api_game_data)
      render json: new_game.id
    else
      render json: { error: "API failed to create new game" }
    end
  end

  protected

  def game_params
    params.require(:game).permit(:board_size, :game_difficulty)
  end

  def get_api_data(game_specs)
    size = game_specs[:board_size]
    level = game_specs[:game_difficulty]
    url = "http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=#{size}&level=#{level}"
    api_response = Faraday.get(url)
    JSON.parse(api_response.body)
  end
end
