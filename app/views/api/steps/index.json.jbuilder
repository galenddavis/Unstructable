json.steps do 
    @steps.each do |step|
        json.set! step.id do 
            json.extract! step, :id, :title, :body, :photo
        end
    end
end