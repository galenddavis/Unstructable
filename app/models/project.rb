class Project < ApplicationRecord

    validates :views, :creator_id, presence: true

    belongs_to :creator, 
        foreign_key: :creator_id,
        class_name: 'User'

    has_many :tags,
        foreign_key: :project_id,
        class_name: 'Tag'

    has_many :steps,
        foreign_key: :project_id,
        class_name: 'Step'

    has_one_attached :title_photo

    
end
