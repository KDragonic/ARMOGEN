var app = new Vue({
	el: '#app',
	data: {
		tab: "posts", //user, posts, community
		search: "",
		uncoveredNav: true,
		selectedTags: [],
		allTags: ['#история', '#начало', '#new', '#моб', '#детское', '#оружие', '#еда', '#босс'],
		searchDisplay: "block",
		currenUser: { "id": 0, "uncoveredPostsID": [] },
		openUserID: 0,
		selectCatalogTopUser: 0,
		openUserObj: { "name": "", "nickname": "", "rank": "", "age": 0, },
		posts:
			[
				{
					"id": 0,
					"name": "Дневник авантюриста [1]",
					"date": new Date(2021, 9, 8, 0, 19, 34, 0),
					"id_user": 0,
					"post_text":
						`1 день - Собрав остаток монет, я смог купить [пустую книгу], [карандаш]x2\n
				2 день - Собрав в рюгзак, немного еды, воды, дневник и карандаши и некоторые вещи которые могут помочь мне выжеть, я вышел из дома.`,
					"like": [0, 1, 2, 3, 4],
					"tag": ["история", "начало"]

				},
				{
					"id": 1,
					"name": "Только что написаный пост",
					"date": new Date(),
					"id_user": 1,
					"post_text": `только что написал новый пост, обратите внимание на дату`,
					"like": [0, 1, 2, 3, 4],
					"tag": ["new", "post"]

				},
				{
					"id": 2,
					"name": "Найден новый монстер на южной части материка",
					"date": new Date(2021, 1, 0, 1, 0, 0, 0),
					"id_user": 0,
					"post_text": "5 дней назад, на западной стороне был найден новый вид монстров, ученые дают ему названия травяной слизень. Пока что проводятся эксперименты над этим видом уже известно некоторые данные: \n\nЭлемент: растения\nСлабость: огонь, кислота\nСопротивления: вода, физические атаки, ментальные атаки.\nПримечания: не нападают первые, обычно в группах, живут в лесах и любят поглощать целебные растения, из слизи можно сделать слабое зелья здорова.",
					"like": [0, 1, 2, 3, 4],
					"tag": ["моб", "юг", "new"]

				},
				{
					"id": 3,
					"name": "Первый в мире настояший меч для дитей",
					"date": new Date(2021, 6, 1, 0, 1, 2, 0),
					"id_user": 1,
					"post_text": "Был сделан достаточно тупой и легкий меч для того чтоб дети не могли об него поранится, а купить его можно а RPG Shop",
					"like": [],
					"tag": ["детское", "оружие", "new"]
				},
				{
					"id": 4,
					"name": "Чтобы узнать новость прочитайте пост",
					"date": new Date(2021, 5, 1, 4, 1, 2, 1),
					"id_user": 2,
					"post_text": "Откройте пост полностю.                                                                                                                                                                                         \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nТут нечего нету =)",
					"like": [],
					"tag": ["троллинг"]
				},
				{
					"id": 5,
					"name": "Новый вид сала",
					"date": new Date(2021, 1, 3, 5, 1, 2, 1),
					"id_user": 3,
					"post_text": "Я не эксперт по салу так что пускай тут напишет кто то другой",
					"like": [],
					"tag": ["new", "еда", "сало"]
				},
				{
					"id": 6,
					"name": "Как завоевать мир",
					"date": new Date(2021, 2, 3, 5, 3, 2, 1),
					"id_user": 4,
					"post_text": "1 шаг - выйти из дома, 2 шаг - зайти обратно так как холодно, 3 шаг - не захватывать мир так там холодно",
					"like": [],
					"tag": ["холод", "улица", "план", "захват"]
				},

				{
					"id": 7,
					"name": "Боссы не такие и уже сильные?",
					"date": new Date(2021, 6, 4, 6, 11, 54, 0),
					"id_user": 0,
					"post_text": "Каждый знает что такое босс подземеля, если нет то в крации это моб который выделается своим поведениям и силами по сравнению с другими. НО! На самом деле они не такие уж сильные, из за их шаблоного поведения выработали для некоторых уже множество тактик которе могут помочь его одалеть, например:\nБосс водного типа - достаточно выманить его из воды и он лешится большой части своих сил, так же он имеет сильную уезвимоть к огню.\nТак что не стоит их так уж сильно боятся если у вас есть тактика борбы с ними",
					"like": [0, 1, 2, 3, 4],
					"tag": ["моб", "босс", "new"]  //#ТегиРулят

				},
			],
		user:
			[
				{
					"id": 0,
					"name": "Денис",
					"nickname": "МултиМаг",
					"rank": "SSS",
					"age": 19,
					"savePost": [0]
				},
				{
					"id": 1,
					"name": "Арсен",
					"nickname": "Дамагер",
					"rank": "SS",
					"age": 19,
					"savePost": [1]
				},
				{
					"id": 2,
					"name": "Андрей",
					"nickname": "Строитель",
					"rank": "S",
					"age": 19,
					"savePost": [2]
				},
				{
					"id": 3,
					"name": "Владимер",
					"nickname": "Владыка Сала",
					"rank": "B",
					"age": 19,
					"savePost": [3]
				},
				{
					"id": 4,
					"name": "Геор",
					"nickname": "Темный Властелин",
					"rank": "C",
					"age": 19,
					"savePost": [4]
				},
				{
					"id": 5,
					"name": "Арт",
					"nickname": "Мечник ветра",
					"rank": "D",
					"age": 19,
					"savePost": [4]
				}
			],
	},
	methods: {
		userInstallation(id) {
			this.openUserID = id;
			this.openUserObj = this.user[id];
		},
		countPostUserID(id) {
			return this.posts.filter(post => post.id_user === id).length;
		},

		getSavedPostsUser(userId) {
			let user = this.user.filter(user => {
				return user.id == userId;
			})[0];

			return this.posts.filter(post => {
				return user.savePost.includes(post.id)
			});
		},

		switchItemUncoveredPostsID(idPost) {
			let list = this.currenUser.uncoveredPostsID;
			if (!list.includes(idPost)) this.currenUser.uncoveredPostsID.push(idPost);
			return;
		},

		isPostAtUncoveredPostsID(idPost) {
			let list = this.currenUser.uncoveredPostsID;
			return list.includes(idPost);
		},
		clearUncoveredPostsID() {
			this.currenUser.uncoveredPostsID = [];
			return;
		},
		isSavedPostUser(Post) {
			let listIDSavePost = this.user[this.currenUser.id].savePost;
			return listIDSavePost.includes(Post.id);
		},

		isLikePost(Post) {
			return Post.like.includes(this.currenUser.id);
		},
		deliteSavePost(idPost) {
			let arr = this.user[this.currenUser.id].savePost;
			var i = 0;
			while (i < arr.length) {
				if (arr[i] === idPost)
					arr.splice(i, 1);
				else ++i;
			}
			this.user[this.currenUser.id].savePost = arr;
		},
		abbreviationsTextPost(limit, id) {
			let text = this.posts[id].post_text;
			if (this.isPostAtUncoveredPostsID(id)) return text;
			if (text.length <= limit) return text;
			text = text.slice(0, limit);
			return text + "...";
		},
		getJoinTags(id) {
			let text = "";
			this.posts[id].tag.forEach(function (item) {
				text += "#" + item + " ";
			});
			return text;
		},
		getNameTagAtPosts(tag) { //Поиск постов с определёным тегом
			let arr = [];
			if (this.tab == "user") {
				arr = this.getSavedPostsUser(this.openUserID).filter(post => {
					return post.tag.filter(item => { return (item.indexOf(tag) !== -1) }).length > 0
				});
			}
			else {
				arr = this.posts.filter(post => {
					return (post.tag.filter(item => { return (item.indexOf(tag) !== -1) }
					)).length > 0;
				})
			}
			return Array.from(arr, p => p.id);
		},
		getNamePostAtPosts(name) {
			let arr = [];
			if (this.tab == "user") {
				arr = this.getSavedPostsUser(this.openUserID).filter(post => //Поиск постов с определёным именим
				{
					return (post.name.indexOf(name) !== -1);
				});
			}
			else {
				arr = this.posts.filter(post => //Поиск постов с определёным именим
				{
					return (post.name.indexOf(name) !== -1);
				});
			}
			return Array.from(arr, p => p.id);
		},
		getNameUserAtPosts(nickname) {
			if (nickname.length <= 0) return;

			let users = this.user.filter(user => {
				return user.nickname.indexOf(nickname) !== -1
			});

			let arr = [];
			if (this.tab == "user") {
				arr = this.getSavedPostsUser(this.openUserID).filter(post => {
					let count = 0;
					for (let i = 0; i < users.length; i++) {
						if (post.id_user === users[i].id) count++;
					}
					return count > 0;
				});
			}
			else {
				arr = this.posts.filter(post => {
					let count = 0;
					for (let i = 0; i < users.length; i++) {
						if (post.id_user === users[i].id) count++;
					}
					return count > 0;
				});
			}
			return Array.from(arr, p => p.id);
		},
		switchingPage(page) {
			this.tab = page;
			if (this.tab !== "posts" && this.tab !== "user") this.searchDisplay = "none";
			else this.searchDisplay = "block";
			search = "";
			this.clearUncoveredPostsID();
		},
		convertSearch(text) {
			isRep = false;
			for (let index = 0; index < text.length; index++) {
				if (text[index] === "(") {
					isRep = true;
					text.slice(index, 1);
				}
				else if (text[index] === ")") {
					isRep = false;
					text.slice(index, 1);
				}
				if (text[index] === " " && isRep)
					text = text.substr(0, index) + "_" + text.substr(index + 1, text.length);
			}
			text = text.replace(/[)()]/g, '');
			let arr = text.split(" ");
			let arguments = [];
			arr.forEach(item => {
				isExclude = false; //0 - искать где есть, 1 - искать где нету
				type = "null"; //#, @, null
				text_2 = "";

				if (item.search(/[#@]/) == 0) {
					type = item[0];
					item = item.replace(/[#@]/, '');

				}
				else {
					if (item.search(/[#@]/) == 1) type = item[1];
					if (item.search(/[!-]/) == 0) {
						isExclude = true;
						item = item.replace(/[!-]/, '');
						item = item.replace(/[#@]/, '');
					}
				}
				item = item.replace(/_/g, ' ');
				text_2 = item;

				arguments.push({
					"isExclude": isExclude,
					"type": type,
					"text": text_2,
				})
			});
			return arguments;
		},
		getUserFormID(id) {
			return this.user.filter(user => {
				return user.id === id;
			})[0];
		},
		getColorUser(user_rank) {
			switch (user_rank) {
				case "SSS":
				case "SS":
				case "S":
					return 'rgb(255, 255, 0)'

				case "A":
					return 'rgb(210, 150, 50)'

				case "B":
					return 'rgb(175, 3, 218)'

				case "C":
					return 'rgb(34, 255, 82)'

				case "D":
				case "F":
					return 'rgb(34, 104, 255)'

				default:
					return 'rgb(255, 255, 255)'
			}
		},
		// Array.from(app.posts, p => p.tag);	
		// Вывод всех тегов постов
		switchSelTag(tag) {
			if (this.selectedTags.includes(tag)) this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
			else this.selectedTags.push(tag);
			this.search = this.selectedTags.join(" ");
		},
		isSelTag(tag) {
			return this.selectedTags.includes(tag);
		},
		dynamicSort(property) {
			var sortOrder = 1;
			if(property[0] === "-") {
				sortOrder = -1;
				property = property.substr(1);
			}
			return function (a,b) {
				var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
				return result * sortOrder;
			}
		}

	},
	computed:
	{
		getListAllTag() {
			return Array.from(this.allTags, p => p);
		},
		getListPost() {
			if (this.search.length >= 1) {
				let arrSearch = this.convertSearch(this.search);
				let postIdArr = [];
				for (let index = 0; index < arrSearch.length; index++) {
					switch (arrSearch[index].type) {
						case "#":
							postIdArr.push({
								"arr": this.getNameTagAtPosts(arrSearch[index].text),
								"isExclude": arrSearch[index].isExclude,
							});
							break;
						case "@":
							postIdArr.push({
								"arr": this.getNameUserAtPosts(arrSearch[index].text),
								"isExclude": arrSearch[index].isExclude,
							});
							break;
						case "null":
							postIdArr.push({
								"arr": this.getNamePostAtPosts(arrSearch[index].text),
								"isExclude": arrSearch[index].isExclude,
							});
							break;
					}
				}
				let postIdArrNorm = [];

				postIdArr.forEach(element => {
					if (!element.isExclude) {
						postIdArrNorm = postIdArrNorm.concat(element.arr);
						postIdArrNorm = postIdArrNorm.filter(item => element.arr.includes(item));
					}
				});


				postIdArr.forEach(element => {
					if (element.isExclude)
						postIdArrNorm = postIdArrNorm.filter(function (el) {
							return !element.arr.includes(el);
						});
				});

				return this.posts.filter(post => {
					return postIdArrNorm.includes(post.id);
				});
			}
			else {
				if (this.tab == "user") return this.getSavedPostsUser(this.openUserID);
				return this.posts;
			}
		},
		getTopUsers(){
			switch (selectCatalogTopUser) {
				case 0:
					People.sort(dynamicSort("ё"));
					break;
			
				default:
					break;
			}
		}
	}
});