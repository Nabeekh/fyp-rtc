class Reply < ApplicationRecord
  belongs_to :comment
  validates :body, presence: true, length: {in: 1..15}
end
