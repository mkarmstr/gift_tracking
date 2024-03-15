Rails.application.routes.draw do
  resources :friends do
    resources :gifts, only: [:create, :destroy]
  end
end
