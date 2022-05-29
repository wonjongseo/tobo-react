import {useForm} from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password2: string;
    extraError?: string;
}

const TodoList = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });

    const onValid = (data: IForm) => {
        if (data.password !== data.password2) {
            setError(
                "password2",
                {message: "Password are not the same"},
                {shouldFocus: true}
            );
        }
        // setError("extraError", {message: "Server Offline"});
    };

    return (
        <div>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder="email"
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", {
                        required: "Write a something",
                        validate: {
                            oneCheck: (value) =>
                                value.includes("one") ? "No one allowds" : true,
                            thowCheck: (value) =>
                                value.includes("two") ? "No two allowds" : true,
                        },
                    })}
                    placeholder="first name"
                />
                <span>{errors?.firstName?.message}</span>
                <input
                    {...register("lastName", {
                        required: "Write a something",
                    })}
                    placeholder="last name"
                />
                <span>{errors?.lastName?.message}</span>
                <input
                    {...register("username", {
                        required: "Write a something",
                        minLength: {
                            value: 5,
                            message: "Too Short",
                        },
                    })}
                    placeholder="username"
                />
                <span>{errors?.username?.message}</span>
                <input
                    {...register("password", {
                        required: true,
                        minLength: 5,
                    })}
                    placeholder="password"
                />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password2", {
                        required: "Write a something",
                        minLength: 5,
                    })}
                    placeholder="password2"
                />
                <span>{errors?.password2?.message}</span>
                <button>Add</button>
            </form>
        </div>
    );
};

export default TodoList;
