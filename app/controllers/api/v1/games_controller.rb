class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    arr = [1,2,3,4,5,6,7,8,9]
    render json: [arr,arr,arr,arr,arr,arr,arr,arr,arr]
  end
end
