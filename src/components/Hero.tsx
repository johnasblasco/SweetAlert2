import Swal from 'sweetalert2'
import 'animate.css';

Swal.fire({
      title: "WELCOME TO SWEET ALERT 2",
      text: "clicked the button!",
      icon: "success"
});

const one = () => {
      Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
      });
}

const two = () => {
      Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html: `
              You can use <b>bold text</b>,
              <a href="#" autofocus>links</a>,
              and other HTML tags
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              👍 Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              👎
            `,
            cancelButtonAriaLabel: "Thumbs down"
      });
}

const three = () => {
      Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
      }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                  Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                  Swal.fire("Changes are not saved", "", "info");
            }
      });
}

const four = () => {
      Swal.fire({
            title: "Custom animation with Animate.css Note you need to install Animate.css",
            showClass: {
                  popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                  popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
      });
}

const five = () => {
      Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
      }).then((result) => {
            if (result.isConfirmed) {
                  Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                  });
            }
      });
}

const six = () => {
      let timerInterval: number | undefined;

      Swal.fire({
            title: "Auto close alert!",
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                  Swal.showLoading();
                  const popup = Swal.getPopup();
                  const timerElement = popup?.querySelector("b") as HTMLBodyElement | null;

                  if (timerElement) {
                        timerInterval = window.setInterval(() => {
                              timerElement.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                  }
            },
            willClose: () => {
                  if (timerInterval !== undefined) {
                        window.clearInterval(timerInterval);
                  }
            }
      }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
            }
      });
};

const seven = () => {
      Swal.fire({
            title: "Submit your Github username",
            input: "text",
            inputAttributes: {
                  autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Look up",
            showLoaderOnConfirm: true,
            preConfirm: async (login) => {
                  try {
                        const githubUrl = `
                  https://api.github.com/users/${login}
                `;
                        const response = await fetch(githubUrl);
                        if (!response.ok) {
                              return Swal.showValidationMessage(`
                    ${JSON.stringify(await response.json())}
                  `);
                        }
                        return response.json();
                  } catch (error) {
                        Swal.showValidationMessage(`
                  Request failed: ${error}
                `);
                  }
            },
            allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
            if (result.isConfirmed) {
                  Swal.fire({
                        title: `${result.value.login}'s avatar`,
                        imageUrl: result.value.avatar_url
                  });
            }
      });
}

const eight = () => {
      Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/nyan-cat.gif")
              left top
              no-repeat
            `
      });
}


const Hero = () => {
      return (
            <div className="p-8 flex flex-col gap-4">
                  <p className='absolute top-[40%] left-[40%] animate-bounceLeft'>👈  Click "A" button for Example</p>
                  <h1 className="text-center text-4xl m-6">SWEET ALERT + DAISY UI | COFFEE THEME</h1>

                  {/* buttons */}
                  <p onClick={one} className="cursor-pointer bg-primary text-primary-content w-fit px-4 text-2xl rounded font-bolder">A</p>
                  <p onClick={two} className="cursor-pointer bg-secondary text-secondary-content w-fit px-4 text-2xl rounded font-bolder">A</p>
                  <p onClick={three} className="cursor-pointer bg-success text-success-content w-fit px-4 text-2xl rounded font-bolder">A</p>
                  <p onClick={four} className="cursor-pointer bg-info text-info-content w-fit px-4 text-2xl rounded font-bolder">A</p>
                  <p onClick={five} className="cursor-pointer bg-warning text-warning-content w-fit px-4 text-2xl rounded font-bolder">A</p>
                  <p onClick={six} className="cursor-pointer bg-error text-error-content w-fit px-4 text-2xl rounded font-bolder">A</p>
                  <p onClick={seven} className="cursor-pointer bg-neutral text-neutral-content w-fit px-4 text-2xl rounded font-bolder">A</p>
                  <p onClick={eight} className="cursor-pointer bg-black text-white w-fit px-4 text-2xl rounded font-bolder">A</p>
            </div>
      )
}

export default Hero

