class SquareSerializer < ActiveModel::Serializer
  attributes :id, :x, :y, :value, :given, :row

  belongs_to :row
end
