import React from "react";

const About = () => {
  return (
    <div className="flex items-center gap-0 px-2 pt-20 text-sm tablet:pt-0 tabletS:gap-8">
      <div className="relative flex flex-col border-r-[1px] border-tWhiteSec/10 pr-2 text-tWhite tabletS:pr-4">
        <div className="absolute top-0 w-5 h-24 bg-gradient-to-b from-bgBlack/100 to-bgBlack/10"></div>
        <div className="absolute bottom-0 w-10 h-24 bg-gradient-to-b from-bgBlack/10 to-bgBlack/100"></div>
        <p>48</p>
        <p>49</p>
        <p>50</p>
        <p>51</p>
        <p>52</p>
        <p>53</p>
        <p>54</p>
        <p>55</p>
        <p>56</p>
        <p>57</p>
        <p>58</p>
        <p>59</p>
        <p>60</p>
        <p>61</p>
        <p>62</p>
        <p>63</p>
        <p>64</p>
        <p>65</p>
        <p>66</p>
        <p>67</p>
        <p>68</p>
        <p>69</p>
        <p>70</p>
        <p>71</p>
        <div className="block tabletM:hidden">
          <p>72</p>
          <p>73</p>
          <p>74</p>
          <p>75</p>
          <p>76</p>
          <p>77</p>
        </div>
        <div className="block mobileL:hidden">
          <p>78</p>
          <p>79</p>
          <p>80</p>
          <p>81</p>
          <p>82</p>
          <p>83</p>
        </div>
      </div>
      <div className="max-w-3xl text-tWhiteSec">
        {/* <p className="">{`/**`}</p> */}
        <p className="">
          const <span className="text-tBlue">About = </span>
          <span className="text-yellow"> {`()`}</span> {` =>`}
          <span className="text-purple-500">{` (`}</span>
        </p>
        <div className="border-l-[1px] border-tWhiteSec/10 pl-4 ">
          <span>{`<`}</span>
          <span className="text-red-400">{`p`}</span>
          <span>{`>`}</span>
          <p>
            What could be more fascinating than the fact that there is always
            more code to write?
            <br />
            <br />
            My areas of expertise include, in addition to technical skills, the
            ability to swiftly grasp new technologies, collaboration and
            commitment, problem-solving, responsive design, and SEO-friendly
            websites. I love implementing responsive design concepts, and
            it&apos;s incredibly thrilling to see my online pages shrink and yet
            look amazing on mobile displays. As a developer, I believe that one
            should never stop learning, and that is the beauty of programming:
            no matter how much you learn, you will always know only a drop in an
            ocean. There is always more to learn, more problems to solve, and
            more to build. And for that, I am grateful and thrilled.
            <br />
            <br />
            Take a look around my website and feel free to reach out to me
            through my contact page or connect with me through my social media
            links. I hope to make many new connections on my programming
            journey!
          </p>
          <span>{`</`}</span>
          <span className="text-red-400">{`p`}</span>
          <span>{`>`}</span>

          <br />
          <p className="text-purple-500">{`)`}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
