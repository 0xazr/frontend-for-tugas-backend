import { defineStore } from "pinia";

export const useApp = defineStore({
    id: "App",
    state: () => ({
      users: [],
      menu: {
        edit_user: {
          show: false,
          data: {},
        }
      },
      input: {
        user: {}
      }
    }),
    actions: {
      async getUsers() {
        // Isinya apa hayoo
      },
      async addUser(user) {
        // Isinya apa hayoo
      },
      async deleteUser(user_id) {
        // Isinya apa hayoo
      },
      async editUser(user) {
        // Isinya apa hayoo
      },
      showEditUserMenu(user_id) {
        let user = this.users.find(user => user.id === user_id);
        this.menu.edit_user.data = {
          id: user.id,
          nama: user.nama,
          email: user.email,
        };
        this.menu.edit_user.show = true;
      },
      closeEditUserMenu() {
        this.menu.edit_user.data = {};
        this.menu.edit_user.show = false;
      },
    },
});