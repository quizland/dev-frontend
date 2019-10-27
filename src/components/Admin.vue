<template>
    <div class="container" v-if="loaded">
        <h1>Admin Panel</h1>
        <h2>Quiz Categories</h2>
        <ul>
            <li v-for="(category, index) in categories" :key="index">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card" @click="choseCategory(index)">
                            <h4>
                                <img
                                    :src="require('../assets/' + category.icon + '.png')"
                                    :alt="category.icon"
                                    class="icon"
                                />
                                {{ category.category }}
                            </h4>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-warning mt-3 mb-3" @click="editCategory(index)">
                            <i class="fas fa-edit"></i> Edit Category
                        </button>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-danger mt-3 mb-3" @click="deleteCategory(index)">
                            <i class="fas fa-minus-circle"></i> Delete Category
                        </button>
                    </div>
                </div>
            </li>
            <li>
                <div class="card mt-3">
                    <div class="row">
                        <div class="col-md-4">
                            <input type="text" v-model="categoryName" placeholder="Category Name" />
                        </div>
                        <div class="col-md-4">
                            <input type="text" v-model="categoryIcon" placeholder="Category Icon" />
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-success mt-3 mb-3" @click="addCategory">
                                <i class="fas fa-plus-circle"></i> Add Category
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import db from "../main";

export default {
    name: "Admin",
    data() {
        return {
            categoryName: "",
            categoryIcon: "",
            loaded: false
        };
    },
    beforeCreate() {
        let categories = [];
        db.collection("categories")
            .orderBy("category")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    categories.push(doc.data());
                });
                this.$store.commit("CATEGORIES", categories);
                this.loaded = true;
            });
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    },
    methods: {
        choseCategory(index) {
            this.$router.push(
                "/" + this.categories[index].category + "/quizes"
            );
        },
        addCategory() {
            if (this.categoryName === "" || this.categoryIcon === "") {
                alert("Category Name and Category Icon should be filled!");
            } else {
                db.collection("categories")
                    .add({
                        category: this.categoryName,
                        icon: this.categoryIcon,
                        quizes: []
                    })
                    .then(docRef => {
                        console.log("Category added: ", docRef.id);
                        alert("Category added: " + this.categoryName);
                        this.$router.go("/admin");
                    })
                    .catch(error => {
                        console.error("Error adding category: ", error);
                        alert("Error adding category: " + error);
                        this.categoryName = "";
                        this.categoryIcon = "";
                    });
            }
        },
        editCategory(index) {
            console.log("edit category: ", index);
        },
        deleteCategory(index) {
            if (
                confirm(
                    "Are you sure to delete category " +
                        this.categories[index].category +
                        "?"
                )
            ) {
                db.collection("categories")
                    .where("category", "==", this.categories[index].category)
                    .get()
                    .then(querySnapshot => {
                        console.log("query: ", querySnapshot);
                        querySnapshot
                            .forEach(doc => {
                                console.log("deleted category: ", index);
                                console.log("doc: ", doc);
                                doc.ref.delete();
                                this.$router.go("/admin");
                            })
                            .catch(error => {
                                console.error(
                                    "Error deleting category: ",
                                    error
                                );
                                alert("Error deleting category: " + error);
                            });
                    });
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
    margin: 10px 10px;
    width: 90%;
    padding: 20px;
}
</style>
