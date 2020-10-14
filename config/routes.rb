Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/home", to: "homes#index"
  get "/play", to: "homes#index"
  get "/games/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :games, only: [:create, :show]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
