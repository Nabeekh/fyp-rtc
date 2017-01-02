class Comment < ApplicationRecord
  belongs_to :article
  has_many :replies, dependent: :destroy
  validates :body, presence: true,
  			length: { in: 1..50  }
end
