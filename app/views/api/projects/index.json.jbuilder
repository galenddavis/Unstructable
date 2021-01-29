
@projects.each do |project|
    json.set! project.id do 
        json.extract! project, :id, :title, :body, :favorites, :views, :category, :creator_id
    end
end