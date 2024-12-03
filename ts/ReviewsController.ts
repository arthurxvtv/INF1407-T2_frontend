interface Review {
  id: number;
  game_name: string;
  stars: number;
}

const url = "https://arthurxvtv.pythonanywhere.com/";

class ReviewsController {
  token(): string | null {
    return localStorage.getItem("token");
  }

  listaReviews(): Promise<Review[]> {
    return fetch(url + "/reviews/", {
      headers: {
        Authorization: "Token " + this.token() || "",
      },
    }).then((request) => request.json());
  }

  login(username: string, password: string): Promise<void> {
    return fetch(url + "/login/", {
      headers: {
        Authorization: "Token " + this.token() || "",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((request) => request.json())
      .then(function (token) {
        if (!token?.token) return;
        localStorage.setItem("token", token.token);
        window.location.replace(
          window.location.href.replace("/login.html", "/index.html"),
        );
      });
  }

  logout(): void {
    fetch(url + "/logout/", {
      headers: {
        Authorization: "Token " + this.token() || "",
      },
      method: "POST",
    }).then(() => {
      localStorage.removeItem("token");
      window.location.replace("login.html");
    });
  }

  createReview(game_name: string, stars: number): Promise<Review> {
    return fetch(url + "/reviews/", {
      headers: {
        Authorization: "Token " + this.token() || "",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        game_name,
        stars,
      }),
    }).then((request) => request.json());
  }

  deleteReview(id: number): Promise<void> {
    return fetch(url + `/reviews/${id}/`, {
      headers: {
        Authorization: "Token " + this.token() || "",
      },
      method: "DELETE",
    }).then((request) => {
      if (!request.ok) {
        throw new Error("Erro ao deletar a review");
      }
    });
  }

  getReview(id: number): Promise<Review> {
    return fetch(url + `/reviews/${id}/`, {
      headers: {
        Authorization: "Token " + this.token() || "",
      },
    }).then((request) => request.json());
  }

  updateReview(id: number, game_name: string, stars: number): Promise<Review> {
    return fetch(url + `/reviews/${id}/`, {
      headers: {
        Authorization: "Token " + this.token() || "",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        game_name,
        stars,
      }),
    }).then((request) => request.json());
  }

  register(username: string, password: string): Promise<void> {
    return fetch(url + "/register/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((request) => {
      if (!request.ok) {
        throw new Error("Erro ao registrar o usuário");
      }
    });
  }

  updatePassword(nova_senha: string): Promise<void> {
    return fetch(url + "/alterar-senha/", {
      headers: {
        Authorization: "Token " + this.token() || "",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        nova_senha,
      }),
    }).then((request) => {
      if (!request.ok) {
        throw new Error("Erro ao alterar a senha");
      }
    });
  }
}