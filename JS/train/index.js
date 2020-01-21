const list_items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17"
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 7;
function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;
  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    let item_element = document.createElement("div");
    item_element.classList.add("item");
    item_element.innerText = item;

    wrapper.appendChild(item_element);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);

  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}
function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;
  if (current_page == page) button.classList.add("active");
  button.addEventListener("click", function() {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);
    let currnt_btn = document.querySelector(".pagenumbers button.active");
    currnt_btn.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);

// NUMBER#2
// $(document).ready(function(){

// 	Slider(20);

// 	function Slider(margin) {

// 		// html var
// 		var sliderContainer = $('#slider');
// 		var sliderInner = $(sliderContainer).find('.slider-inner');
// 		var item = $(sliderInner).find('.item');
// 		var itemShow = 4; // Сколько показывать 4
// 		var pagination = $(sliderContainer).find('.pagination');

// 		// Head var
// 		var itemL = item.length; // Количество  12
// 		var sliderInnerWidth = sliderInner.width(); // 1170
// 		var sliderWrapper = $(sliderInner).find('.slider-wrapper');

// 		// Item Width
// 		var itemW = (sliderInnerWidth - ((margin * 2) * itemShow)  ) / itemShow; //252

// 		// Wrapper width
// 		var sliderWrapperWidth =  itemL * ( itemW + (margin * 2)); // 3510

// 		// Максимальное значение шага
// 		var nextMax = sliderWrapperWidth - sliderInnerWidth;
// 		nextMax = nextMax * (-1);
// 		var td = 0;
// 		var step;

// 		$('.prev').click(function(){

// 			if (td == 0) {
// 				return false;
// 			}
// 			else {
// 				step = itemW + (margin * 2);
// 				td += step
// 				$('.slider-wrapper').css({
// 					'transform' : 'translate3d(' + td + 'px, 0px, 0px)'
// 				});
// 				console.log(td);
// 			}
// 		});
// 		$('.next').click(function(){

// 			if(nextMax == td) {
// 				return false
// 			}
// 			else {
// 				step = itemW + (margin * 2);

// 				td -= step
// 				$('.slider-wrapper').css({
// 					'transform' : 'translate3d(' + td + 'px, 0px, 0px)'
// 				});
// 				console.log(td);
// 			}
// 		});

// 		$(sliderWrapper).css({
// 			'width': sliderWrapperWidth + 'px'
// 		});

// 		$(item).css({
// 			'width' : itemW + 'px',
// 			'margin' : margin + 'px'
// 		});

// 	};

// });

// NUMBER#1
// let count = 10; //всего записей
// let cnt = 5; //сколько отображаем сначала
// let cnt_page = Math.ceil(count / cnt); //кол-во страниц

// //выводим список страниц
// let paginator = document.querySelector(".paginator");
// let page = "";
// for (let i = 0; i < cnt_page; i++) {
//   page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
// }
// paginator.innerHTML = page;

// //выводим первые записи {cnt}
// let div_num = document.querySelectorAll(".num");
// for (let i = 0; i < div_num.length; i++) {
//   if (i < cnt) {
//     div_num[i].style.display = "block";
//   }
// }

// let main_page = document.getElementById("page1");
// main_page.classList.add("paginator_active");

// //листаем
// function pagination(event) {
//   let e = event || window.event;
//   let target = e.target;
//   let id = target.id;

//   if (target.tagName.toLowerCase() != "span") return;

//   let num_ = id.substr(4);
//   let data_page = +target.dataset.page;
//   main_page.classList.remove("paginator_active");
//   main_page = document.getElementById(id);
//   main_page.classList.add("paginator_active");

//   let j = 0;
//   for (let i = 0; i < div_num.length; i++) {
//     let data_num = div_num[i].dataset.num;
//     if (data_num <= data_page || data_num >= data_page)
//       div_num[i].style.display = "none";

//   }
//   for (let i = data_page; i < div_num.length; i++) {
//     if (j >= cnt) break;
//     div_num[i].style.display = "block";
//     j++;
//   }
// }
