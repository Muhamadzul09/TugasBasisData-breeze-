<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\NewsCollection;
use App\Http\Requests\StorenewsRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdatenewsRequest;




class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{

    

    // Mengambil data berita dengan urutan descending berdasarkan id dan paginasi 5 menggunakan Eloquent
    $news = new NewsCollection(News::orderBy('id', 'DESC')->paginate(8));
    
    // Mengirim data ke tampilan menggunakan Inertia::render
    return Inertia::render('Homepage', [
        'title' => 'Homepage',
        'description' => 'Selamat Datang',
        'news' => $news
    ]);
}

public function view() {
    return Inertia::render('Kelompok', [
        'title' => 'Kelompok'
    ]);
}


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $news = new NewsCollection(News::paginate(5));
        return Inertia::render('DashboardCreate', [
            'title' => 'Dashboard Create',
            'news' => $news
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'title' => 'required|max:255',
        'description' => 'required|max:500',
        'category' => 'required|max:500',
        'image' => 'image|file|max:1024',
    ]); 

    if($request->file('image')) {
        $validatedData['image'] = $request->file('image')->store('post-images');
    }

    // Tambahkan email penulis ke dalam data yang divalidasi
    $validatedData['author'] = auth()->user()->email;

    // Buat data berita menggunakan model News
    News::create($validatedData);

    // Redirect ke dashboard dengan pesan sukses
    return redirect("/dashboard")->with('message', 'News created successfully');
}
         
         public function show()
         {
             // Ambil berita yang diposting oleh pengguna yang terautentikasi
             $mynews = News::where('author', auth()->user()->email)->get();
             dd($mynews);
             
             // Pastikan untuk mengirimkan data $mynews ke tampilan Inertia
             return Inertia::render('Dashboard', [
                 'mynews' => $mynews
             ]);
         }
    public function edit(News $news, Request $request)
    {

        return Inertia::render('EditDashboard', [
           'title' => 'Edit Dashboard',
           'myNews' => $news->find($request->id)
       ]);
    }

    /**                                                                                                                 
     * Update the specified resource in storage.r
     */
    // public function update(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'title' => 'required|max:255',
    //         'description' => 'required|max:500',
    //         'category' => 'required|max:500',
    //         'image' => 'image|file|max:1024',
    //     ]); 

    //     if($request->file('image')) {
    //         if($request->oldImage)
    //         {
    //             Storage::delete($request->oldImage);
    //         }
    //         $validatedData['image'] = $request->file('image')->store('post-images');
    //     }

    //     dd($validatedData);

    //     News::where('id', $request->id->update($validatedData));
            
    //     return to_route("dashboard")->with('message', 'News updated successfully');
    // }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|max:500',
            'category' => 'required|max:500',
            'image' => 'image|file|max:1024',
        ]); 
    
        // Menghapus gambar lama jika ada dan menyimpan gambar baru
        if ($request->hasFile('image')) {
            if ($request->oldImage) {
                Storage::delete($request->oldImage);
            }
            $validatedData['image'] = $request->file('image')->store('post-images');
        } else {
            // Jika tidak ada gambar baru yang diunggah, gunakan gambar yang lama
            $validatedData['image'] = $request->oldImage;
        }
    
        // Mengupdate berita dengan data yang divalidasi
        News::where('id', $request->id)->update([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'category' => $validatedData['category'],
            'image' => $validatedData['image']
        ]);
    
        return redirect()->route("dashboard")->with('message', 'News updated successfully');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'News deleted successfully');
    }


    public function download($image)
    {
        // Ambil path lengkap gambar dari storage
        $path = 'post-images/' . $image;

        // Pastikan gambar ada
        if (!Storage::disk('public')->exists($path)) {
            abort(404);
        }

        // Mengembalikan response untuk mengunduh gambar
        return response()->download(storage_path('app/public/' . $path));
    }

}
