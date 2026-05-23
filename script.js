const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".menu-card");
const menuGrid = document.querySelector(".menu-grid");
const revealItems = document.querySelectorAll(".reveal");
const parallaxItems = document.querySelectorAll(".parallax");
const header = document.querySelector(".site-header");
const comboList = document.querySelector(".combo-list");
const modal = document.querySelector("#dish-modal");
const modalImage = modal?.querySelector(".modal-image");
const modalType = modal?.querySelector(".modal-type");
const modalTitle = modal?.querySelector("#modal-title");
const modalDescription = modal?.querySelector(".modal-description");
const modalPrice = modal?.querySelector(".modal-price");
const modalWeight = modal?.querySelector(".modal-weight");
const modalCalories = modal?.querySelector(".modal-calories");
const modalCloseButtons = modal?.querySelectorAll(".modal-close, .modal-backdrop") || [];

const dishFacts = {
  "Бургер с грушевой котлетой": ["340 г", "640 ккал"],
  "Грушевые запеченные ломтики": ["180 г", "260 ккал"],
  "Грушевое мороженое": ["160 г", "310 ккал"],
  "Сэндвич с грушей, сыром и беконом": ["300 г", "590 ккал"],
  "Жареная картошка с грушей": ["220 г", "410 ккал"],
  "Грушевые ломтики в панировке": ["190 г", "360 ккал"],
  "Гирос с говядиной и грушей": ["360 г", "690 ккал"],
  "Запеченная груша с охотничьими сосисками": ["280 г", "520 ккал"],
  "Грушевый молочный коктейль": ["350 мл", "420 ккал"],
  "Молочный коктейль с грушей и малиной": ["350 мл", "440 ккал"],
  "Грушевый молочный коктейль со смородиной": ["350 мл", "435 ккал"],
  "Грушевый латте": ["300 мл", "210 ккал"],
  "Грушевый раф": ["300 мл", "290 ккал"],
  "Грушевый капучино": ["250 мл", "190 ккал"],
  "Дюшес": ["330 мл", "160 ккал"],
  "Грушевый сок": ["300 мл", "145 ккал"],
  "Салат с грушей, сыром и орехами": ["240 г", "390 ккал"],
  "Горячий салат с грушей и куриной печенью": ["290 г", "470 ккал"],
  "Фрикадельки в грушево-горчичном соусе": ["320 г", "560 ккал"],
  "Груша с уткой или курицей": ["330 г", "540 ккал"],
  "Ризотто с грушей и сыром бри": ["310 г", "520 ккал"],
  "Кесадилья с грушей, курицей и сыром": ["300 г", "610 ккал"],
  "Паста с грушей, горгонзолой и орехами": ["330 г", "640 ккал"],
  "Грушевая шарлотка": ["170 г", "330 ккал"],
  "Грушевый пирог с миндалем": ["180 г", "380 ккал"],
  "Груши, фаршированные мясом": ["310 г", "530 ккал"],
  "Багет Курица BBQ": ["340 г", "650 ккал"],
  "Багет Ростбиф и сырный соус": ["350 г", "690 ккал"],
  "Багет Бекон, яйцо и сыр": ["330 г", "720 ккал"],
  "Багет Индейка и сливочный сыр": ["320 г", "590 ккал"],
};

const dishTasteNotes = {
  "Бургер с грушевой котлетой":
    "Сочный первый аккорд: грушевая котлета звучит сладко-пряно, соус дает горчичный драйв, а салат держит ритм. Тето называет это припевом, который хочется повторить.",
  "Грушевые запеченные ломтики":
    "Теплая баллада про мед, корицу и мягкую грушу. Ломтики тянутся как спокойный синт-пэд в треке Тето и заканчиваются карамельным послевкусием.",
  "Грушевое мороженое":
    "Холодный нежный куплет: сливки звучат бархатно, груша добавляет солнечные кусочки, ваниль сглаживает финал. Идеально для паузы между громкими треками.",
  "Сэндвич с грушей, сыром и беконом":
    "Хрустящий бит из тоста и бекона, поверх которого сыр тянет теплую мелодию, а груша дает сладкий неожиданный хук. Тето бы включила это на разогреве.",
  "Жареная картошка с грушей":
    "Соленый грув с фруктовым сдвигом: картошка хрустит в такт, груша смягчает края, специи добавляют бас. Небольшой трек, который внезапно забирает внимание.",
  "Грушевые ломтики в панировке":
    "Снаружи громкий краш, внутри мягкая грушевая партия. Тето любит этот контраст: будто танцевальный дроп, после которого остается медовая улыбка.",
  "Гирос с говядиной и грушей":
    "Плотный уличный бит: говядина держит низ, груша добавляет яркую верхнюю ноту, а сметанный соус собирает все в ровный припев.",
  "Запеченная груша с охотничьими сосисками":
    "Дымный, пряный и немного дерзкий трек. Сосиски дают жар, груша отвечает сладкой карамелью, а горчичный соус ставит жирную точку.",
  "Грушевый молочный коктейль":
    "Сливочный поп-хит без лишнего шума: молоко и груша звучат мягко, взбитые сливки делают припев воздушным. Тето пьет такой после репетиции.",
  "Молочный коктейль с грушей и малиной":
    "Розовый танцевальный ремикс: груша держит сладкую основу, малина врывается ярким вокалом, а молочная текстура делает трек гладким.",
  "Грушевый молочный коктейль со смородиной":
    "Более темная ягодная версия: смородина дает кислинку и характер, груша смягчает бас, молоко склеивает все в ночной поп-куплет.",
  "Грушевый латте":
    "Мягкий кофейный интро-трек: эспрессо звучит спокойно, молоко округляет тембр, груша добавляет светлую сладость без лишней громкости.",
  "Грушевый раф":
    "Кремовый slow jam от Тето: сливки, ваниль и груша идут плотной волной, кофе остается теплым бэк-вокалом. Нежно, сладко, уверенно.",
  "Грушевый капучино":
    "Пенный утренний куплет: эспрессо задает темп, молочная пена делает звук мягким, а груша оставляет легкую фруктовую искру.",
  "Дюшес":
    "Игристый припев из детства, но в версии Тето: холодная груша, пузырьки и мята щелкают как хай-хэты, а сладкий финал зовет сделать еще глоток.",
  "Грушевый сок":
    "Чистая грушевая нота без аранжировки. Сочно, прямо, солнечно: как демо Тето, которое и без продакшена попадает в настроение.",
  "Салат с грушей, сыром и орехами":
    "Свежий акустический сет: зелень шуршит, сыр дает глубокий тон, орехи щелкают перкуссией, а груша ведет мелодию.",
  "Горячий салат с грушей и куриной печенью":
    "Теплый джазовый номер: печень звучит насыщенно, карамельная груша добавляет сладкий свет, соус связывает все как мягкий саксофон.",
  "Фрикадельки в грушево-горчичном соусе":
    "Плотный мясной бас и яркая горчичная синкопа. Груша не спорит, а ведет тему сладко-пряным рефреном, как фирменный ad-lib Тето.",
  "Груша с уткой или курицей":
    "Праздничная главная тема: птица звучит сочно, груша дает глянцевую сладость, травы добавляют зеленые верхние ноты.",
  "Ризотто с грушей и сыром бри":
    "Кремовый lounge-трек: рис держит мягкий фон, бри расплавляется как теплый синт, груша добавляет светлый фруктовый припев.",
  "Кесадилья с грушей, курицей и сыром":
    "Горячий танцевальный треугольник: тортилья хрустит, сыр тянется, курица держит основу, а груша внезапно делает трек запоминающимся.",
  "Паста с грушей, горгонзолой и орехами":
    "Сырная драматичная ария: горгонзола звучит мощно, груша смягчает напряжение, орехи добавляют сухой ритм. Для смелого плейлиста Тето.",
  "Грушевая шарлотка":
    "Домашний припев на теплой кухне: тесто мягкое, груша нежная, корица шепчет на фоне. Тето оставила бы это на бис.",
  "Грушевый пирог с миндалем":
    "Хрустящий десертный финал: миндаль играет перкуссию, груша тянет сладкую мелодию, крем делает концовку мягкой и нарядной.",
  "Груши, фаршированные мясом":
    "Неожиданный гастро-соло: сладкая запеченная груша держит форму, мясная начинка дает плотность, травы добавляют зеленый ритм.",
  "Багет Курица BBQ":
    "Грушевый багет хрустит как вступление, курица гриль держит плотный куплет, а BBQ-соус добавляет дымный припев. Маринованный лук дает яркий акцент в стиле Тето.",
  "Багет Ростбиф и сырный соус":
    "Ростбиф звучит глубоко и мясно, сырный соус сглаживает тембр, а руккола с огурцами добавляют свежий верх. Это более взрослый трек в багетной линейке Тето.",
  "Багет Бекон, яйцо и сыр":
    "Завтрак с громким битом: бекон хрустит, яйцо делает середину мягкой, сыр тянется, а ранч собирает все в сливочный хук.",
  "Багет Индейка и сливочный сыр":
    "Самый легкий багетный куплет: индейка звучит спокойно, сливочный сыр делает текстуру нежной, овощи добавляют свежесть, а чесночный соус ставит аккуратную точку.",
};

const allMenuOrder = [
  "Бургер с грушевой котлетой",
  "Сэндвич с грушей, сыром и беконом",
  "Гирос с говядиной и грушей",
  "Кесадилья с грушей, курицей и сыром",
  "Запеченная груша с охотничьими сосисками",
  "Фрикадельки в грушево-горчичном соусе",
  "Груша с уткой или курицей",
  "Груши, фаршированные мясом",
  "Багет Курица BBQ",
  "Багет Ростбиф и сырный соус",
  "Багет Бекон, яйцо и сыр",
  "Багет Индейка и сливочный сыр",
  "Салат с грушей, сыром и орехами",
  "Горячий салат с грушей и куриной печенью",
  "Ризотто с грушей и сыром бри",
  "Паста с грушей, горгонзолой и орехами",
  "Жареная картошка с грушей",
  "Грушевые ломтики в панировке",
  "Грушевый молочный коктейль",
  "Молочный коктейль с грушей и малиной",
  "Грушевый молочный коктейль со смородиной",
  "Дюшес",
  "Грушевый сок",
  "Грушевый латте",
  "Грушевый раф",
  "Грушевый капучино",
  "Грушевые запеченные ломтики",
  "Грушевое мороженое",
  "Грушевая шарлотка",
  "Грушевый пирог с миндалем",
];

const sortedCards = [...cards].sort((left, right) => {
  const leftTitle = left.querySelector("h3")?.textContent || "";
  const rightTitle = right.querySelector("h3")?.textContent || "";
  const leftIndex = allMenuOrder.indexOf(leftTitle);
  const rightIndex = allMenuOrder.indexOf(rightTitle);

  return (leftIndex === -1 ? 999 : leftIndex) - (rightIndex === -1 ? 999 : rightIndex);
});

const sortMenuForAll = () => {
  if (!menuGrid) return;

  sortedCards.forEach((card) => menuGrid.appendChild(card));
};

revealItems.forEach((item, index) => {
  item.style.setProperty("--stagger", `${Math.min(index % 6, 5) * 70}ms`);
});

sortMenuForAll();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    if (filter === "all") {
      sortMenuForAll();
    }

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    cards.forEach((card, index) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !isVisible);
      card.style.setProperty("--stagger", `${Math.min(index % 6, 5) * 50}ms`);
    });
  });
});

const closeDishModal = () => {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const openDishModal = (card) => {
  if (
    !modal ||
    !modalImage ||
    !modalType ||
    !modalTitle ||
    !modalDescription ||
    !modalPrice ||
    !modalWeight ||
    !modalCalories
  ) {
    return;
  }

  const image = card.querySelector("img");
  const type = card.querySelector(".item-type");
  const title = card.querySelector("h3");
  const description = card.querySelector("p:not(.item-type)");
  const price = card.querySelector("span");

  modalImage.src = image?.src || "";
  modalImage.alt = image?.alt || "";
  modalType.textContent = type?.textContent || "";
  modalTitle.textContent = title?.textContent || "";
  modalDescription.textContent =
    dishTasteNotes[title?.textContent || ""] || description?.textContent || "";
  modalPrice.textContent = price?.textContent || "";
  const [weight, calories] = dishFacts[title?.textContent || ""] || ["250 г", "420 ккал"];
  modalWeight.textContent = weight;
  modalCalories.textContent = calories;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();
};

cards.forEach((card) => {
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");

  card.addEventListener("click", () => openDishModal(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDishModal(card);
    }
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeDishModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDishModal();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
);

revealItems.forEach((item) => revealObserver.observe(item));

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const syncComboFade = () => {
  if (!comboList) return;

  const isAtEnd = comboList.scrollTop + comboList.clientHeight >= comboList.scrollHeight - 2;
  comboList.classList.toggle("is-at-end", isAtEnd);
};

syncComboFade();
comboList?.addEventListener("scroll", syncComboFade, { passive: true });
window.addEventListener("resize", syncComboFade);

window.addEventListener(
  "pointermove",
  (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 8);
      item.style.setProperty("--mx", `${x * depth}px`);
      item.style.setProperty("--my", `${y * depth}px`);
    });
  },
  { passive: true },
);
