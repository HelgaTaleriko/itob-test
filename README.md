Тестовое задание 
№1
---
![изображение](https://github.com/HelgaTaleriko/itob-test-cdn/assets/92912563/b651cdb7-daff-4a3f-a16c-c37558772c88)
Компонент Header включает в себя 
<br/>
NavBar,
<br/>
Search,
<br/>
Banner .
<br/>

В свою очередь NavBar состоит из компонентов :
NavBarLogo ( логотип-ссылка с переходом на главную страницу ),
NavBarLink( ссылки на разные страницы сайта ) 

Search состоит из компонентов :

SearchInput ( поле ввода для поиска ),
SearchButton ( onklick-> поиск ) .

Banner:  просто красивая картинка 


Для удобства верстки и позиционирования , я бы NavBar и search засунула бы в один  div->header - wrapper
Снимок экрана 2024-02-08 в 15.48.09<img width="1264" alt="изображение" src="https://github.com/HelgaTaleriko/itob-test-cdn/assets/92912563/b18b57ec-a2ce-4d93-8493-097de70154c6">

компонент Main
Обертка с классом info-wrapper состоит из компонентов: Info, OSInfo

Info состоит из : 
<br/>
InfoTitle,
<br/>
Swiper, 
<br/>
InfoList
<br/>
InfoList: состоит из InfoListItem, которые в свою очередь стостоят из ссылок и опсания к ссылкам

OSInfo состоит из :
<br/>
OSInfoTitle,
<br/>
Download,
<br/>
OSInfoList
<br/>
Download состоит из: 
<br/>
DownloadButton,
<br/>
DownloadMore(ссылка с другими загрузками)

OSInfoList: состоит из OSInfoListItem, которые в свою очередь стостоят из ссылок и опсания к ссылкам


Снимок экрана 2024-02-08 в 15.48.19<img width="1280" alt="изображение" src="https://github.com/HelgaTaleriko/itob-test-cdn/assets/92912563/4623d8a3-b604-45ee-9ee7-3c3c56af12c7">

в это изображение входит компонент Main c компонентом News + компонент Footer

в компонент News входит : 
<br/>
TitleNews,
<br/>NewsList( сюда входит NewsListItem(ссылки с последними новостями) и NewListMore(ссылка с остальными новостями))

Компонент Footer: FooterLang + FooterInfo
в FooterLang входит : LangList( LangListItem ссылки на перевод страницы)+ LangInfo(ссылка на инструкцию по переводу страницы)
в FooterInfo входит : входят ссылки и текст (не уввидела смысла разделять по компонентам )


