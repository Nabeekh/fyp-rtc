class Outcome < ApplicationRecord
  belongs_to :package, dependent: :destroy
end
