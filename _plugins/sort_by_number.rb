module Jekyll
    module SortByNumberFilter
      def sort_by_number(array, property)
        return [] if array.nil?
  
        # Crucial change: Convert to a Ruby Array before sorting
        array.to_a.sort_by { |item| item[property].to_i }
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::SortByNumberFilter)