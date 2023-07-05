class Story:
   def __init__ (self,name,length,moral_lessons,age_group):
       self.name=name
       self.length=length
       self.moral_lessons=moral_lessons
       self.age_group=age_group
  
   def tell_story(self):
       return f'The story named {self.name}  of length {self.length} is narrated to {self.age_group}  old children and has {self.moral_lessons} lessons.'
  
# class Legend (Story):
#    def __init__ (self,beliefs,name,length,moral_lessons,age_group):
#        super().__init__(name,length,moral_lessons,age_group)
#        self.beliefs=beliefs
#        return f'The story named {self.name} is believed to have {self.beliefs}'
# class Fiction(Story):
#    def __init__(self,genre,name,length,moral_lessons,age_group):
#        super().__init__(name,length,moral_lessons,age_group)
#        self.genre=genre
#        return f'{self.name} is of {self.genre} genre'






# story1=Story(name="Big Giant",length="7 pages",moral_lessons="courage",age_group="7  years")
#story1.tell_story()


class StoryTeller:
   def __init__ (self,story_title,story_type,storyteller_name,age_group):
       self.story_title=story_title
       self.story_type=story_type
       self.storyteller_name=storyteller_name
       self.age_group=age_group
   def make_story(self):
       return f'The story of {self.story_title} is of {self.story_type}  is narrated by  {self.storyteller_name} to {self.age_group} years old children.'
# class Child_storyteller(StoryTeller):
#    def make_story(self):
#        return f'The story of {self.story_title} is of {self.story_type}  is narrated by  {self.storyteller_name} to {self.age_group} years old children.'
  


# class Adult_storyteller(StoryTeller):
#    def make_story(self):
#        return f'The story of {self.story_title} is of {self.story_type}  is narrated by  {self.storyteller_name} to {self.age_group} years old children.'
  


# storyteller1=StoryTeller(story_title="Big Giant",storyteller_name="Kelly Klein",story_type="Fable",age_group=" 6")
# storyteller1.make_story()
#storyteller2=Child_storyteller(story_title="Jelly fish",storyteller_name="Rhukia Ilham",story_type="Fable",age_group=" 4")
#storyteller2.make_story()
#storyteller3=Adult_storyteller(story_title="Lovana",storyteller_name="
# Malcom Nesbit",story_type="Love",age_group=" 26")
#storyteller3.makestory()
class Translator:
    def __init__(self,language,title ):
        self.title=title
        self.language =language
    def translate_story(self):
        translatedStory=""
        if self.language=="English":
            translatedStory=f"{self.title} will be translated to {self.language}"
        elif self.language=="Kiswahili":
            translatedStory=f"{self.title} will be translated to {self.language}"
        return translatedStory
       
# translate=Translator(language="Kiswahili",title="TimeAble")
# translate.translate_story()


class Recipe:
   def __init__ (self,food_name,unique_ingredients,preparation_time,cooking_method,nutritional_information):
       self.unique_ingredients=unique_ingredients
       self.preparation_time=preparation_time
       self.cooking_method=cooking_method
       self.food_name=food_name
       self.nutritional_information=nutritional_information
   def show_recipe(self):
       return f'{self.food_name} is made of {self.unique_ingredients} and  is prepared through  {self.cooking_method} for {self.preparation_time} and it adds {self.nutritional_information} to the body'


# recipe=Recipe(food_name='Pilau',unique_ingredients='Rice',preparation_time='2 hours',cooking_method='frying',nutritional_information='proteins')
# recipe.show_recipe()


class MoroccanRecipe(Recipe) :
   def __init__ (self,country,flavour,food_name,unique_ingredients,preparation_time,cooking_method,nutritional_information):
       super().__init__ (food_name,unique_ingredients,preparation_time,cooking_method,nutritional_information)
       self.country=country
       self.flavour=flavour
   def show_recipe(self):
        describe_recipe=super().show_recipe()
        return f"{describe_recipe}. " \
              f"It is from {self.country} and the  flavour is {self.flavour}"
# moroco=MoroccanRecipe(country='Moroco',flavour='spicy',food_name='Pilau',unique_ingredients='Rice',preparation_time='2 hours',cooking_method='frying',nutritional_information='proteins')
#moroco.show_recipe()


class EthiopianRecipe(Recipe):
   def __init__ (self,country,fermentation_time,food_name,unique_ingredients,preparation_time,cooking_method,nutritional_information):
       super().__init__ (food_name,unique_ingredients,preparation_time,cooking_method,nutritional_information)
       self.country=country
       self.fermentation_time=fermentation_time
   def show_recipe(self):
        describe_recipe=super().show_recipe()
        return f'{describe_recipe}. ' \
                f'It is from {self.country} and it takes {self.fermentation_time} time to to ferment'
# ethiopia=EthiopianRecipe(country='Ethiopia',fermentation_time='2 days',food_name='Injera',unique_ingredients='Rice',preparation_time='2 hours',cooking_method='frying',nutritional_information='proteins')
# ethiopia.show_recipe()  


class NigerianRecipe(Recipe):
   def __init__ (self,country,food_portion,food_name,unique_ingredients,preparation_time,cooking_method,nutritional_information):
       super().__init__ (food_name,unique_ingredients,preparation_time,cooking_method,nutritional_information)
       self.country=country
       self.food_portion=food_portion
   def show_recipe(self):
       describe_recipe=super().show_recipe()
       return f'{describe_recipe}. ' \
                f'It is from {self.country} and it takes {self.food_portion} time to to ferment'
# nigeria=NigerianRecipe(country='Nigeria',food_portion='300 grams',food_name='Fufu',unique_ingredients='cassava 
# flour',preparation_time='2 hours',cooking_method='frying',nutritional_information='proteins')
# nigeria.show_recipe()  


