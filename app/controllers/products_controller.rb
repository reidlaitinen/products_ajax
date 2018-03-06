class ProductsController < ApplicationController
  # before_action :set_product, only: [:index, :create]


  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  def form
    render partial: 'form'
  end

  private
    def product_params
      params.require(:product).permit(:name, :base_price, :description, :quantity_on_hand, :color, :weight, :other_attributes)
    end
end
