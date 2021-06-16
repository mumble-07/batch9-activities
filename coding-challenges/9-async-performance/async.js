//--------LECTURE JUNE 14, 2021 MONDAY-----------//

//OLD WAY ASSYNC---------------//CALL BACK HELL

// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [234, 423, 123, 134, 123];
//     console.log(recipeID);
//     setTimeout(
//       (id) => {
//         const recipe = { title: "French Tomato Pasta", publisher: "Jonas" };
//         console.log(`${id}: ${recipe.title}`);

//         setTimeout(
//           (publisher) => {
//             const recipe2 = { title: "Italian Pizza", pubisher: "Jonas" };
//             console.log(recipe);
//           },
//           1500,
//           recipe.publisher
//         );
//       },
//       1500,
//       recipeID[2]
//     );
//   }, 1500);
// }
// getRecipe();

//ASYNC mumble---------------------------TRIAL//

// async function getRecipeAW() {
//   const IDs = await getIds();
//   console.log(IDs);
//   const recipe = await getRecipe(IDs[2]);
//   console.log(recipe);
// }

// function getIds() {
//   setTimeout(() => {
//     const recipeId = [234, 423, 123, 134, 123];
//     return recipeId;
//   }, 1500);
// }

// function getRecipe(id) {
//   setTimeout(
//     (id) => {
//       const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
//       return recipe;
//     },
//     1500,
//     id
//   );
// }

// // function getRelated(publisher) {
// //   setTimeout(
// //     (publisher) => {
// //       const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
// //       return recipe2;
// //     },
// //     1500,
// //     publisher
// //   );
// //}
// getRecipeAW();

//from sir Justin-------------------------------//

async function getRecipeAW() {
  const IDs = await getIds();
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
}

function getIds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const recipeId = [234, 423, 123, 134, 123];
      resolve(recipeId);
    }, 1500);
  });
}

function getRecipe(id) {
  return new Promise((resolve, reject) => {
    setTimeout((id) => {
      const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
      resolve(recipe);
    }, 1500);
  });
}

function getRelated(publisher) {
  return new Promise((resolve, reject) => {
    setTimeout((publisher) => {
      const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
      resolve(recipe2);
    }, 1500);
  });
}
getRecipeAW();

//SIR PAU------------------------------//

// async function getPublisherAW() {
//     const publisher = await getRelated("Jonas");
//     return publisher;
//   }
//   async function getRecipeAW() {
//     const recipe = await getRecipe(100);
//     return recipe;
//   }
//   function getIds() {
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         const recipeId = [234, 423, 123, 134, 123];
//         resolve(recipeId);
//       }, 1500);
//     });
//   }
//   function getRecipe(id) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(
//         (id) => {
//           const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
//           resolve(recipe);
//         },
//         1500,
//         id
//       );
//     });
//   }
//   function getRelated(publisher) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(
//         (publisher) => {
//           const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
//           resolve(recipe2);
//         },
//         1500,
//         publisher
//       );
//     });
//   }
//   // getPublisherAW().then((result) =>
//   //   console.log(`${result.title} ${result.publisher} is the best ever.`)
//   // );
//   getRecipeAW()
//     .then((result) => console.log(`${result.title} is the best ever.`))

//iDolee-------------------------------------------------//

// async function getRecipeAW() {
//     const IDs = await getIds();
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//   }
//   //fn for timeout shortcut
//   function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
//   async function getIds() {
//     await timeout(1500)
//     const recipeId = [234, 423, 123, 134, 123];
//     return recipeId;
//   }
//   async function getRecipe(id) {
//     await timeout(1500)
//     const recipe = { title: “Fresh Tomato Pasta”, publisher: “Jonas” };
//     return recipe;
//   }
//   async function getRelated(publisher) {
//     await timeout(1500)
//     const recipe2 = { title: “Italian Pizza”, publisher: “Jonas” };
//     return recipe2;
//   }
//   getRecipeAW();
