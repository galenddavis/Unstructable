class Project < ApplicationRecord

    validates :title, :body, :views, :category, :creator_id, presence: true

    belongs_to :creator, 
        foreign_key: :creator_id,
        class_name: 'User'

    has_many :tags,
        foreign_key: :project_id,
        class_name: 'Tag'

    
end
