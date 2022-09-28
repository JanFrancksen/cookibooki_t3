import Link from "next/link";

const ProfileNav = () => {
  return (
    <div className="flex gap-x-4 bg-cb_primary rounded-full py-2 px-4">
      <Link href="#">
        <a>Edit Profile</a>
      </Link>
      <Link href="/posts/new">
        <a>create Post</a>
      </Link>
      <Link href="/rezepte/new">
        <a>create Recipe</a>
      </Link>
      <Link href="#">
        <a>Recipes</a>
      </Link>
      <Link href="#">
        <a>Recipes</a>
      </Link>
    </div>
  );
};

export default ProfileNav;
