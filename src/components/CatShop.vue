<template>
  <div class="shoppy">
    <br />
    <br />
    <h1>cats</h1>
    <div>
      <div v-if="$page.gcms.products" class="product-grid text-center">
        <div class="text-center">
          <div class="post-feed">
            <div v-for="product in products" :key="product.id" class="flex-col">
              <b-card-group deck>
                <b-card
                  v-for="images in product.images"
                  :title="product.name"
                  :img-src="images.url"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem; padding: 20px; max-height: 35rem; min-height: 35rem"
                  class="text-center"
                >
                  <b-card-text>
                    <h5>{{ product.price }} ฿.</h5>
                    {{ product.description }}
                  </b-card-text>
                  <template #footer>
                    <b-button href="#" variant="primary" @click="addToCart(product)">
                      Add to Cart
                    </b-button>
                  </template>
                </b-card>
              </b-card-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Cat Shop Pag"
  },
  data() {
    return {
      cartItems: [],
      products: [
        {
          name: "",
          description: "",
          categories: {
            name: ""
          },
          price: "",
          images: [
            {
              url: ""
            }
          ],
          slug: ""
        }
      ]
    }
  },

  created() {
    this.products = this.$page.gcms.productCats
  },
  methods: {
    // Add Items to cart
    addToCart(itemToAdd) {
      this.cartItems = JSON.parse(localStorage.getItem("product"))
      if (this.cartItems == null) {
        this.cartItems = []
      }
      this.cartItems.push(itemToAdd)
      localStorage.setItem("product", JSON.stringify(this.cartItems))
      // this.cartItems.push(window.localStorage.getItem("product"))
    }
  }
}
</script>
