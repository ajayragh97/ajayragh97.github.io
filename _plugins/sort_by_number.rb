module Jekyll
    module SortByNumberFilter
      def sort_by_number(array, property)
        return [] if array.nil? # Handle nil arrays
        array.sort_by { |item| item[property].to_i }
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::SortByNumberFilter)